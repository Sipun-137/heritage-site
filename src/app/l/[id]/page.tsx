

export default function Page({ params }: { params: { id: string } }) {
    const id=params.id
  return (
    <>
    <title>{id}</title>
    <div className="flex justify-center items-center min-h-screen">
        {id}
    </div>
    </>
  )
}
