import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
const session = await getServerSession();

if(!session){
    redirect("/")
}

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-green-400 border border-green-400 p-4 font-semibold rounded-2xl">
            User successfully logged in, here I can put anything I want :)
        </h1>
    </div>
  );
};

export default Dashboard;