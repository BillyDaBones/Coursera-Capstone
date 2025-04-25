interface specialsCardType {
    img: string
    header: string
    description: string
    price: number
    redirect: string
}

export const Main = () => {
    return (
        <>
            <main className="flex py-25 justify-center">
                <div className="max-w-1/2 w-full">
                    <div className="flex justify-between items-center pb-2">
                        <h1 className="font-semibold text-2xl">This weeks specials!</h1>
                        <button className="bg-ll-yel px-6 py-3 rounded-sm text-black font-karla">Online Menu</button>
                    </div>
                    <section className="flex gap-4 py-4 justify-between">
                        <SpecialsCard
                            img="../src/assets/specials/bruchetta.svg"
                            header="Bruchetta"
                            description="Fresh, toasted perfection topped with juicy tomatoes and basil. An irresistible starter you’ll crave again."
                            price={5.99}
                            redirect="/bruchetta"
                        />
                        <SpecialsCard
                            img="../src/assets/specials/lemon dessert.jpg"
                            header="Lemon Dessert"
                            description="Light, zesty, and refreshingly sweet. This citrusy treat is the perfect ending to your meal."
                            price={4.99}
                            redirect="/lemon-dessert"
                        />
                        <SpecialsCard
                            img="../src/assets/specials/greek salad.jpg"
                            header="greek salad"
                            description="Crisp veggies, briny olives, and feta come together in a flavor-packed, Mediterranean classic."
                            price={12.99}
                            redirect="/greek-salad"
                        />
                    </section>
                </div>
            </main>
        </>
    )
}

const SpecialsCard = ({img, header, description, price, redirect}: specialsCardType) => {
    return (
        <a href={`/menu${redirect}`}>
            <div className="flex flex-col bg-[#EDEFEE] w-[265px] w-max-[100%] h-[390px] justify-between rounded-lg shadow-2xl animate-card">
                <div>
                    <img className="h-[153px] object-cover w-full rounded-lg" alt="banner image for dessert" src={img}></img>
                </div>
                <div className="flex place-content-between px-3 pt-3">
                    <h2 className="font-bold capitalize">{header}</h2>
                    <h2 className="font-semibold text-ll-teal">{`$${price}`}</h2>
                </div>
                <div>
                    <p className="text-sm p-3 align-top">{description}</p>
                </div>
                <div className="flex px-4 py-2 mt-auto justify-between items-center">
                    <h2 className="font-semibold text-gray-600 text-md">Order for delivery</h2>
                    <img className="text-right opacity-50 w-15" alt="icon for delivery" src="../src/icons/delivery_01.png"></img>
                </div>
            </div>
        </a>
    )
}