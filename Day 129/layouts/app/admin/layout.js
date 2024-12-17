export const metadata = {
  title: "Shinobi - Admin Page",
  description: "An admin page for all shinobis",
};


export default function AdminLayout({ children }) {
  return (
    <>
        <div>Navbar</div>
        {children}
        <div>Footer</div>
    </>
  );
}
