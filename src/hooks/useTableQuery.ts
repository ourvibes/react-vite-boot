import { useState, useMemo, useCallback } from 'react';
import { message } from 'antd';
import { useRequest } from 'ahooks';

export interface UseTableQueryProps {
  queryFunction: Function;
  extraParams: any;
  errorMsg: string;
}

const ERROR_MESSAGE = '查询列表信息失败!';

const useTableQuery = (props: UseTableQueryProps) => {
  const { queryFunction, extraParams = {}, errorMsg = ERROR_MESSAGE } = props;

  const [queryArgs, setQueryArgs] = useState<any>({
    pageNum: 1,
    pageSize: 10,
    ...extraParams
  });

  const { loading, data, run } = useRequest(
    async () => {
      try {
        const resp = await queryFunction({
          ...queryArgs,
        });

        return resp?.data?.data;
      } catch (error) {
        message.error(errorMsg);
        return {};
      }
    },
    {
      refreshDeps: [queryArgs],
    },
  );

  const onPaginationChange = useCallback(
    (pageNum: number, pageSize: number) => {
      const isChange = queryArgs.pageSize !== pageSize;
      setQueryArgs((oldValues: any) => {
        return {
          ...oldValues,
          pageNum: isChange ? 1 : pageNum,
          pageSize,
        };
      });
    },
    [queryArgs.pageSize],
  );

  const refresh = () => {
    if (queryArgs?.pageNum !== 1) {
      setQueryArgs({
        ...queryArgs,
        pageNum: 1,
      });
      return;
    }
    run();
  };

  const pagination = useMemo(() => {
    const { pageNum = 0, pageSize = 0, totalRows = 0 } = data?.page ?? {};
    return {
      current: pageNum,
      pageSize,
      total: totalRows,
      showSizeChanger: true,
      showQuickJumper: true,
      onChange: onPaginationChange,
      showTotal: (total: number) => `共${total}条`,
    };
  }, [onPaginationChange, data]);

  return {
    setQueryArgs,
    loading,
    data: data?.list ?? [],
    query: run,
    refresh,
    pagination,
  };
};

export default useTableQuery;
