import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Chat Layout',
  description: 'Chatr layout',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div className='w-full mx-auto max-w-full h-full'>
           
           
                {children}
         
        </div>
  )
}
