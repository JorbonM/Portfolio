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
    <Disclosure as="nav" className="bg-gray-800 h-1/20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item,index) => (
                  <button
                    key={item.name}
                    onClick={()=>{scrollToPage(index)}}
                    aria-current={index==currentPage ? 'page' : undefined}
                    className={classNames(
                      index==currentPage ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item,index) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={()=>{scrollToPage(index)}}
              aria-current={index==currentPage ? 'page' : undefined}
              className={classNames(
                index==currentPage ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
