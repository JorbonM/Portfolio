import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Main', href: '#' },
  { name: 'Intro', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopBar({currentPage,parallaxRef}) {

  const scrollToPage = (num) => { 
    if(parallaxRef.current)
      parallaxRef.current.scrollTo(num);
  }
  return (
<Disclosure as="nav" className="bg-gray-800">
  {({ open }) => (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">

          {/* Desktop navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToPage(index)}
                  aria-current={
                    index === currentPage ? 'page' : undefined
                  }
                  className={classNames(
                    index === currentPage
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <DisclosureButton
              className="inline-flex items-center justify-center rounded-md p-2
                         text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>

              {open ? (
                // X
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 justify-center">
          {navigation.map((item, index) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => scrollToPage(index)}
              aria-current={
                index === currentPage ? 'page' : undefined
              }
              className={classNames(
                index === currentPage
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block w-full text-center rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </>
  )}
</Disclosure>
  )
}
