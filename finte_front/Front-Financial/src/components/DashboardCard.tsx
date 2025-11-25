interface Props {
  title: string;
  value: string | number;
}

const DashboardCard = ({ title, value }: Props) => {
  return (
    <div className="p-6 bg-white shadow rounded-xl border text-center">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;