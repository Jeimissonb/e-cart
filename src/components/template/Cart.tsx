import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Cart () {
  return (
    <Link href={"/cart"}> 
      <div className="flex relative">
        <IconShoppingCart size={32} stroke={1} />
        <div className="
              absolute -top-2.5 0 -right-2.5 w-6 h-6 bg-red-500 rounded-full
              flex justify-center items-center text-xs
            "
        >
          
        </div>
      </div> 
    </Link>
  )
}