import bannerImg from '../assets/banners/restaurant chef B.jpg'

export const Header = () => {
    return (
        <>
            <header className="flex bg-ll-teal text-white py-30 justify-center hover:">
                <div className="max-w-1/2 w-full relative ">
                    <div className="flex-wrap text-left font-mark">
                        <h1 className="text-ll-yel font-semibold text-6xl">Little Lemon</h1>
                        <h2 className="font-semibold text-2xl pb-2">Chicago</h2>
                        <p className="text-xl">A family restaurant based in Chicago, <br/> Local, fresh, always cooked right</p>
                        <button className="bg-ll-yel px-6 py-3 rounded-sm text-black font-karla mt-8" >Reserve a table</button>
                    </div>
                    <img
                        className="object-cover w-90 h-120 self-end rounded-lg md:absolute top-[-55px] right-0"
                        alt="A chef handcrafting a meal in a kitchen"
                        src={bannerImg}
                    >
                    </img>
                </div>
            </header>
        </>
    )
}