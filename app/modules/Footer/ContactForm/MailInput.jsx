export default function MailInput({ email, setEmail }) {
    return (
        <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block py-2.5 px-3 w-11/12 mx-3 md:w-96 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Your Email Address"
            required
        />
    );
}