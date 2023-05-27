import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "It's Shad-CN",
  description:
    "This is a fan page to clarify the confusion arround @shadcn's name, a lot of people think his name is shad-CDN as in Content Delivery Network when in fact his actual name is Shad-CN (without the D)",
}

const getTwitterProfileImage = async () => {
  const url = 'https://twttrapi.p.rapidapi.com/get-user?username=shadcn'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
      'X-RapidAPI-Host': process.env.RAPID_API_HOST || '',
    },
  }

  try {
    const response = await fetch(url, options)
    return response.json()
  } catch (error) {
    console.log('Error fetching profile image', error)
  }
}

export default async function Home() {
  const data = await getTwitterProfileImage()

  let imageUrl = ''

  if (data?.profile_image_url_https) {
    imageUrl = data?.profile_image_url_https
  }

  return (
    <main className="flex min-h-screen max-w-screen-xl mx-auto flex-col items-center justify-center p-4 md:p-24 gap-4 ">
      <div className="flex justify-center items-center mb-10 gap-4">
        {imageUrl && (
          <Image
            alt="ShadCN's Twitter Profile Image"
            src={imageUrl}
            width={50}
            height={50}
            className="rounded-full"
          />
        )}

        <h1>
          <Link
            href="https://twitter.com/shadcn"
            className="underline text-white hover:text-blue-400 text-xl"
          >
            @shadcn
          </Link>
        </h1>
      </div>
      <div className="flex flex-col gap-10 text-[50px] lg:text-[80px]">
        <h1
          className="relative font-bold gap-2 border-2 border-dashed border-gray-500 px-10 rounded-xl"
          style={{
            cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✅</text></svg>") 16 0,auto`,
          }}
        >
          It&apos;s
          <p>
            Shad-
            <span className="text-green-300">CN ✅</span>
          </p>
        </h1>
        <h2
          className="relative font-bold border-2 border-dashed border-gray-500 px-10 rounded-xl"
          style={{
            cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>❌</text></svg>") 16 0,auto`,
          }}
        >
          NOT
          <p>
            Shad-<span className="text-red-300">CDN ❌</span>
          </p>
        </h2>
      </div>
    </main>
  )
}
