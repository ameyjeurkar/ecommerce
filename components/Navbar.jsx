import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-gray-200 text-black fixed z-20 top-0 start-0 border-b border-default left-0 right-0 box-border border mx-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">ShopCart</span>
            </a>
            <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="font-medium font-bold flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                    <Link href="/home" className="font-bold block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">HOME</Link>
                    <Link href="/hotdealz" className="font-bold block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">HOT DEAL</Link>
                    <Link href="/cart" className="font-bold block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">CART</Link>
                    <Link href="/checkout" className="font-bold block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">CHECKOUT</Link>
                </ul>
            </div>
            </div>
        </nav>
    )
}
export default Navbar;