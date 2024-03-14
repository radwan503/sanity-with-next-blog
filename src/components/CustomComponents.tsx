import { PortableTextComponents } from '@portabletext/react'


export const components: PortableTextComponents = {
 block: {
  h3: ({ children }) => <h3 className='text-3xl font-bold text-accentDarkPrimary'>{children}</h3>
 },
 listItem: {
  bullet: ({ children }) => <li className='list-disc marker:text-accentDarkSecondary list-inside ml-4'>{children}</li>
 }
}


