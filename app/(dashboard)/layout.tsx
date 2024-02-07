import { Navbar } from './_components/navbar';
import { OrgSidebar } from './_components/org-sidebar';
import { Sidebar } from './_components/sidebar';

interface DashBoradLayoutProps {
  children: React.ReactNode;
}

const DashBoradLayout = ({ children }: DashBoradLayoutProps) => {
  return (
    <main className='h-full'>
      <Sidebar />
      <div className='h-full pl-[60px]'>
        <div className='flex gap-x-3 h-full'>
          <OrgSidebar />
          <div className='h-full flex-1'>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoradLayout;
