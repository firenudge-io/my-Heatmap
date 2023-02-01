export const ProjectFooter = () => {
    return (
        <footer className="text-center pb-6 bg-gray-100 text-gray-800 dark:bg-gray-800">

            <a target={"_blank"} rel="noreferrer" href="https://pratikkabade.github.io/myJournal/" className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white">
                <div className="flex flex-row text-center justify-center items-center p-4" >
                    <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/myJournal.svg" alt="myJournal"
                        className="w-10 rounded-md mr-3" />
                    myJournal
                </div>
            </a>

        </footer>
    )
}