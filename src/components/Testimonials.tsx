import { TESTIMONIALS } from "@/constans"
import Image from "next/image"

const Testimonials = () => {
  return (
	 <div className="container mx-auto my-20 border-b pb-10">
		<h2 className="mb-6 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
			What our Clients said
		</h2>
		
		<div className="flex flex-wrap">
			{TESTIMONIALS.map((item,index)=> 
			<div key={index} className="w-full p-2 md:w-1/2 lg:w-1/4">
				<div className="rounded-xl border p-4">
				<div className="flex items-center">
				<Image
					src={item.image}
					width={80}
					height={80}
					className=" mr-4 rounded-full border-4 border-neutral-400"
					alt={item.name}/>
					<div>
						<h4 className="w-full ">{item.name}</h4>
						<span className="text-sm text-neutral-600">{item.instagram}</span>
					</div>
				</div>
				<p className="p-4">{item.feedback}</p>
				<p className="text-sm text-neutral-400">{item.city_country}</p>
			</div>
			</div>
			)} 
		</div>
	 </div>
  )
}

export default Testimonials