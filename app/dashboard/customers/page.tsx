import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import React, { Suspense } from "react";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};
const Customers = async (props:{searchParams?:Promise<{query?:string }>}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  return (
    <Suspense fallback={<InvoicesTableSkeleton/>}>
      <CustomersTable query={query}/>
    </Suspense>
  );
};

export default Customers;
