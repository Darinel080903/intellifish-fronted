import Button from "../../components/Button/Button";

function Card({ title, content, imageUrl }) {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 align-middle">
        <img className="rounded-t-lg" src={imageUrl} alt="" style={{ height: "300px", objectFit: "cover" }} />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
              <Button>Ir</Button>
          </div>
      </div>
    );
}
export default Card;
