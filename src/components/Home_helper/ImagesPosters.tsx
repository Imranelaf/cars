
export default function Images() {

    const data = [
        {
            name: 'Lightning mcQueen',
            image: 'McQueen.webp'
        },
        {
            name: 'Cruz Ramirez',
            image: 'Cruz_Ramirez.webp'
        },
        {
            name: 'Doc Hudson',
            image: 'Doc_Hudson.webp'
        },
        {
            name: 'Jackson Storm',
            image: 'Jackson_Storm.webp'
        },
        {
            name: 'Martin',
            image: 'Martin.webp'
        },
        {
            name: 'Sally Carrera',
            image: 'Sally_Carrera.webp'
        },
    ]

    return (
        <div className="min-h-screen h-fit w-full font-extrabold ">
            <h6 className="text-8xl m-8">Characters</h6>
            <h6 className="text-9xl !text-red-500 ">Posters</h6>
            <div className="h-auto w-auto p-4 lg:flex gap-8 ">

                {
                    data.map((item) => (
                        <div className="w-full mt-3">
                        <img 
                                key={item.name}
                        src={`./images/Posters/${item.image}`}
                        alt={`${item.name}`}
                        className="rounded-xl lg:min-w-120 h-110"
                        />
                                <h6 className="text-center text-2xl border-2 border-red-500 rounded-xl mt-1">{item.name}</h6>
                                </div>
                        ))
                }



            </div>

        </div>
    )
}