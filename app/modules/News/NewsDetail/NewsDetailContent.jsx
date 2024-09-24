export default function NewsDetailContent({newsDetail}) {
    return (
        <>
            <img src={newsDetail[0].image} alt="News Image" className=" mb-8 rounded-xl " />
            <p className="font-bold text-2xl">{newsDetail[0].title}</p>
            <br />
            <br />
            <p className="text-justify text-gray-700">{newsDetail[0].newsDetail}</p>
            <br />
            <p className="text-gray-600">&emsp;^ What is lorem ipsum?</p>
            <p className="text-gray-600">&emsp;^ Why do we use it?</p>
            <p className="text-gray-600">&emsp;^ Where does it come from?</p>
            <br />
            <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere aliquam vel voluptates, quos dolores repellat corrupti alias est ab blanditiis ipsum veniam error reprehenderit quisquam quia earum? Alias, praesentium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, illo officiis nulla sunt eum distinctio quas cumque neque debitis iste dicta. Magnam omnis aut explicabo eos saepe enim quibusdam vel? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quisquam inventore ex et repellendus labore repudiandae eum dignissimos quod? </p>
            <br />
            <br />
            <p className="text-justify text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis commodi iure voluptate illo quam dolor inventore neque reiciendis fugit consequuntur eligendi, maiores odio repudiandae aliquam corporis ea harum officia mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam aperiam, tempore magni quia quibusdam alias eum iste quae dolorem blanditiis voluptas odio, repudiandae assumenda! Reprehenderit odit eum maxime non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nostrum amet optio voluptatum cupiditate libero numquam maiores corrupti quod, autem, deleniti nihil, voluptatibus est facilis voluptatem dignissimos aliquid. Modi, repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error modi non blanditiis quam velit animi enim natus, odio exercitationem tempore incidunt obcaecati, soluta suscipit. Eveniet porro quia facere magni!</p>
            <br />
        </>
    )
}