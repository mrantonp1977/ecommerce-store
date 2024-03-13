
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("f7ef266f-cf35-4692-9967-edc4302c8c5e");
  return ( 
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
   );
}
 
export default HomePage;