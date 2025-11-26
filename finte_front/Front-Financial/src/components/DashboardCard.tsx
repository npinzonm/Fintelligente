interface Props {
  title: string;
  value: string | number;
  color?: string;
}

const DashboardCard = ({ title, value, color }: Props) => {
    
    const cardColor = color || "bg-blue-500"; 

    return (
        <div className={`p-5 rounded-xl shadow-lg flex-1 min-w-[200px] text-center ${cardColor} text-white`}>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-3xl font-extrabold mt-1">{value}</p>
        </div>
    );
};

export default DashboardCard;