import { FEATURED_PROPERTIES } from "@/constans"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FeaturedProperties = () => {
  return (
	 <div className="conyainer mx-auto border-b py-6 pb-10">
		<h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
			Featured Properties
		</h2>
		<div className="flex flex-wrap justify-center text-center">
			{FEATURED_PROPERTIES.map((prop,index)=>
				<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
					<Link href="#" className="m-2 inline-block ">
						<div className="p-8">
							<Image src={prop.image} width={300} height={300} className=" mb-8 rounded-md object-cover" alt="image"/>
							<div className="text-center ">
								<h6 className="mb-5 mt-2 font-medium ">{prop.name}</h6>
								<span className="mb-5 mt-2">${prop.price}</span>
								<div className="mt-2 flex items-center justify-center">
									<Star fill="gold" strokeWidth={0} className="mr-2"/>
									<span className="text-sm">
										{prop.rating} ({prop.reviews} reviews)
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>
			)}
		</div>
	 </div>
  )
}

export default FeaturedProperties