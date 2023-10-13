export default function AuthLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <div className="m-4 font-bold">{children}</div>;
}