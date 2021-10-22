/// <reference types="react" />
import { ObjectMock } from '../../../types';
import { DataTableProps } from '@atom/design-system/dist/components/templates/data-table/DataTable';
export interface TablePageProps<T extends ObjectMock, K> {
    defaultOpened?: boolean;
    isShowedFilters?: boolean;
    fetchData: DataTableProps<T, K>['fetchData'];
    data: DataTableProps<T, K>['tableProps']['data'];
    columns: DataTableProps<T, K>['tableProps']['columns'];
    filters: DataTableProps<T, K>['filterProps']['filters'];
    checkboxFilters: DataTableProps<T, K>['filterProps']['checkboxFilters'];
    initialFilterValues: DataTableProps<T, K>['filterProps']['initialValues'];
}
export declare const TablePage: <T extends ObjectMock, K>({ data, columns, filters, checkboxFilters, initialFilterValues, isShowedFilters, defaultOpened, }: TablePageProps<T, K>) => JSX.Element;
