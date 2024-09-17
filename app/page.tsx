import Image from "next/image";
import Chaap1 from '../public/images/chaap 1.jpg';

export default function Home() {
  return (
    <div className="flex justify-center items-center w-90">
    <Image
      src={Chaap1}
      alt="Big packet Chaap"

    />
</div>
   
  );
}
