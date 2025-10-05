export default function Careers() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
                We are always looking for talented individuals to join Micro Moulds & Tools. Apply below to become part of our growing team.
            </p>
            <form className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none"
                />
                <textarea
                    rows="5"
                    placeholder="Why do you want to join?"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 outline-none resize-none"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Application
                </button>
            </form>
        </section>
    );
}
