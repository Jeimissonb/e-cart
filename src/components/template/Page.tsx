import Header from "./Header"

export interface PageProps {
  children: React.ReactNode
  className?: string
}

export default function Page(props: PageProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{props.children}</main>
    </div>
  )
}