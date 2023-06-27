
import Navbar from './Navbar';


export default function DashboardLayout({
    children,
  }) {
    
    
    return (
      <section className=" bg-white min-h-screen text-black"> 
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar/>

        {children}
      </section>
    );
  }