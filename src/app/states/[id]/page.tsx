

export default async function Page({ params }: { params: { id: string } }) {
    const id=params.id
    // const data=await 
  return (
    <>
    <title>{id}</title>
    <div className="flex justify-center items-center min-h-screen">
        {id}
    </div>
    </>
  )
}
