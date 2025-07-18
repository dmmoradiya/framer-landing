import Image from "next/image";

export default function TechStackCard({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex items-center gap-8 bg-primary-800 text-gray-200 px-4 py-2 rounded-xl shadow-md h-16 w-40 ">
            <Image src={icon} alt={name} width={24} height={24} />
            <span className="text-sm">{name}</span>
        </div>
    );
}