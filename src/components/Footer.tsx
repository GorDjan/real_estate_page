import { FOOTER } from "@/constans"
import { FacebookIcon, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"


const Footer = () => {
  return (
	 <div className="bg-black text-white py-20">
		<div className="conatiner mx-auto">
			<div className="flex flex-wrap border-b border-neutral-700">
				<div className=" w-full sm:w-1/2 lg:w-6/12 p-4">
					<h2 className=" text-center">RealEs</h2>
					<p className=" text-center lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
					<div className="flex flex-wrap gap-4 my-10 justify-center">
						<FacebookIcon/>
						<Instagram/>
						<Twitter/>
						<Youtube/>
					</div>
				</div>
				{FOOTER.categories.map((item,index)=> 
					<div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4 text-center">
						<h3 className=" font-semibold uppercase pb-4">{item.name}</h3>
						<ul>
							{item.links.map((link,index)=><li key={index} className="my-4 items-center text-center">
								<Link href={link.url} className="text-sm hover:text-neutral-500">{link.title}</Link>
							</li>)
							}
						</ul>
					</div>
				)}
			</div>
			<p className="p-10 text-center text-sm text-neutral-500">
				{FOOTER.copyright}
			</p>
		</div>
	 </div>
  )
}

export default Footer