export default function NameInput({ name, setName }) {
    return (
        <input
            type="text"
            name="floating_name"
            id="floating_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block md:mx-7 py-2.5 px-3 w-11/12 mx-3 md:w-96 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Your Full Name"
            required
        />
    );
}