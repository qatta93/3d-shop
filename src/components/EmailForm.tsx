import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export const EmailForm = (csrfToken:any) => {

  const router =  useRouter()
  const [authState, setAuthState] = useState<{email: string, password: string}>({
      email: '',
      password: ''
  })
  const [pageState, setPageState] = useState<{error: string, processing: boolean}>({
      error: '',
      processing: false
  })

  const handleFieldChange = (e) => {
      setAuthState(old => ({ ...old, [e.target.id]: e.target.value }))
  }

  const handleAuth = async () => {
      setPageState(old => ({...old, processing: true, error: ''}))
      signIn('credentials', {
          ...authState,
          redirect: false
      }).then(response => {
          console.log(response)
          if (response.ok) {
              // Authenticate user
              router.push("/")
          } else {
            setAuthState({email: '', password: ''})
              setPageState(old => ({ ...old, processing: false, error: response.error }))
          }
      }).catch(error => {
          console.log(error)
          setPageState(old => ({...old, processing: false, error: error.message ?? "Something went wrong!"}))
      })
  }
  
  return (
    <form method="post" action="/api/auth/signin/email" className='w-full px-4 text-slate-800'>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input type="email" id="email" name="email" placeholder='Email address' onChange={handleFieldChange} value={authState.email} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 font-light'/>
      <input type="password" id="password" name="password" placeholder='Password' onChange={handleFieldChange} value={authState.password} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 mt-2 font-light'/>
      <button type="submit" disabled={pageState.processing} onClick={handleAuth} className='shadow-xl shadow-slate-200 w-full p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-500 font-medium'>SIGN IN</button>
      {pageState.error !== '' && <p className='text-rose-700 text-center mb-8'>{pageState.error}</p>}
    </form>
  )
}