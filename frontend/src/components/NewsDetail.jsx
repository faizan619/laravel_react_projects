import { useState } from "react";

export default function NewsDetail() {
    const [mode,setmode] = useState('OFF')
    //  <button className="border p-1 rounded bg-green-500 text-white" onClick={()=>DesignMode()}>Design Mode : {mode}</button>
    const DesignMode = ()=>{
        if(mode==="OFF"){
            console.log('mode is on');
            document.designMode = 'on';
            setmode('ON');
        }
        else{
            console.log('mode is off')
            document.designMode = 'off'
            setmode('OFF');
        }
    } 
  return (
    <div className="flex justify-center">
      <div className="p-5 m-3 rounded shadow-sm shadow-black border w-[95%] md:w-[70%] ">
        <div className="flex gap-4" contentEditable='false'>
          <p className="px-2 py-1 bg-black text-white rounded">Political</p>
          <p className="p-1">18 March 2024</p>
         
        </div>
        <div className="mt-3">
            <img src="/frontend/src/assets/bg-main.png" alt="ev mechanish image" height={0} width={0} className="w-full h-[50%]" />
            <h2 className="text-3xl font-bold capitalize">The EV Mechanism are the best thign i can say it exists</h2>
            <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore aspernatur necessitatibus mollitia architecto adipisci ab! Vel, laborum alias consectetur mollitia ipsum nihil delectus laboriosam expedita, quas sequi similique reprehenderit amet accusamus, cumque eos beatae consequuntur? Quo vitae, rem quis iste impedit id minima. Harum deserunt quae nulla ad officia in dignissimos sapiente corporis! Voluptates amet at quia totam fugit veniam voluptatibus dolor aut eligendi. Sed maiores amet laborum est, sequi alias eius <br/> autem aliquam, vero recusandae, accusamus et in quas debitis dolor id. Ullam sunt explicabo commodi maxime fuga aperiam illum at labore error inventore quibusdam saepe voluptatum dolor, eaque praesentium? Maxime iste repudiandae et neque laboriosam error quasi, consequuntur vel sunt reiciendis voluptates quas dicta atque id voluptatibus aperiam consequatur voluptate obcaecati ipsa quod harum, impedit voluptas veniam? Numquam voluptate voluptatum soluta deleniti? Debitis culpa nemo maxime sed. Voluptas nesciunt quod similique, nulla ipsum tenetur autem dicta minus modi in libero at magnam maiores vero labore ea obcaecati, ducimus repudiandae cumque nihil distinctio, asperiores vitae. Tempore corrupti architecto totam ipsam aspernatur! Debitis, nam corrupti nobis modi facere aperiam necessitatibus aut, inventore laudantium iste libero similique molestias? Animi sit harum a maiores voluptatum aperiam illo laboriosam inventore! Consequatur numquam placeat voluptatibus doloribus pariatur illum, in rerum hic nobis officiis ipsum asperiores est optio recusandae cumque quaerat perferendis? Inventore, natus nemo voluptatum, adipisci laboriosam excepturi dolores sequi doloremque repudiandae reprehenderit ad, harum voluptates nam cupiditate. Itaque quas corrupti optio aliquid similique quis, labore recusandae. Dolore asperiores, illum reprehenderit sit consequatur quasi assumenda est, ipsam aliquam autem eligendi. Id ducimus expedita laudantium iste blanditiis, aliquam corrupti itaque? Ratione assumenda alias nostrum, pariatur quae quas laudantium saepe ad officia sunt eius nulla minus rerum cumque hic eum impedit molestias at eveniet quibusdam cum rem blanditiis quod nihil. Minus accusantium delectus assumenda eius sapiente tenetur. Saepe totam quia exercitationem odit voluptate? Facere omnis, perspiciatis culpa vel sint commodi illo. Ipsum aliquam quis molestiae! Mollitia laudantium adipisci corrupti aut, tenetur vitae iste accusamus nemo officia sapiente perspiciatis labore expedita pariatur, est distinctio eveniet doloribus blanditiis maiores porro enim molestiae quos voluptatibus eum! Possimus natus dicta quae expedita? Laborum facere consequatur omnis voluptatem fugiat temporibus id unde! Nisi labore ex, praesentium illum voluptates reiciendis eius vel, eveniet cupiditate accusantium laborum molestias aspernatur dolorem iure rerum. Ullam cumque repellat accusantium expedita, quam, voluptatibus unde ducimus magnam quo repellendus aperiam alias rerum voluptatem delectus consequuntur! Adipisci,<br/>  a eligendi voluptatibus, accusantium autem, nam saepe doloribus aliquid corporis obcaecati recusandae, beatae placeat magnam. Blanditiis nostrum debitis dicta iste fugiat consequatur aperiam nobis maiores recusandae suscipit. Eum fugiat possimus unde repellendus similique quis officia optio quaerat blanditiis, odit aut culpa nemo assumenda est iste ipsum reprehenderit, temporibus quo eveniet! Error fugit corrupti nemo accusantium esse, laborum delectus. Architecto praesentium, id fuga enim eligendi perspiciatis atque accusamus! Adipisci, culpa quas aut beatae eius nihil, officiis vero quam veniam odio excepturi, debitis expedita velit omnis. Architecto debitis ad quod eius incidunt blanditiis exercitationem rem placeat cumque quibusdam, unde ullam minima nobis doloribus ratione corporis, quae hic consectetur nam. Exercitationem eum enim corrupti vitae molestiae? Quis facere harum ab natus sequi ullam magnam debitis ipsa eaque, animi quia minima enim impedit necessitatibus repudiandae, ut dolore aspernatur autem. Placeat nemo quae voluptate natus totam vitae et voluptates temporibus reiciendis expedita! Nam voluptatem asperiores recusandae harum obcaecati earum, corporis adipisci delectus numquam eaque ipsam ut, nemo saepe voluptas aut deleniti. Explicabo velit amet numquam. Amet eos sequi nesciunt asperiores odio officiis, quam cum ut quidem doloremque eaque quos, saepe aliquam pariatur, possimus veritatis ad quibusdam voluptatem velit reprehenderit excepturi laudantium voluptates unde obcaecati. Eum unde voluptatem beatae placeat in?
            </p>
        </div>
      </div>
    </div>
  );
}
