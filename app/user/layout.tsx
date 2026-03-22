import UserPortalNav from "../components/user/UserPortalNav";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 min-h-[70vh]">
      <UserPortalNav />
      <div className="max-w-6xl mx-auto px-4 pb-16">{children}</div>
    </div>
  );
}
