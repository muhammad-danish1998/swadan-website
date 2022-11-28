const people = [
  {
    name: "Leslie Alexander",
    para: `It is a long established fact 
    that a reader will be distracted by the 
    readable content of a page when looking
     at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal
       distribution of letters,`,

    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    para: `It is a long established fact 
    that a reader will be distracted by the 
    readable content of a page when looking
     at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal
       distribution of letters,`,

    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    para: `It is a long established fact 
    that a reader will be distracted by the 
    readable content of a page when looking
     at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal
       distribution of letters,`,

    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    para: `It is a long established fact 
    that a reader will be distracted by the 
    readable content of a page when looking
     at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal
       distribution of letters,`,

    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  // More people...
];

export default function CardHome() {
  return (
    <div className="py-4 grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto max-w-5xl mt-5">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex space-x-3 mainBackground  px-0 py-0 shadow-sm"
        >
          <div className="flex-shrink-0">
            <img className="h-18 w-18 " src={person.imageUrl} alt="" />
          </div>
          <div className="min-w-0 flex-1 p-4">
            <a href="#" className="focus:outline-none">
              <h3 className="text-xl font-medium text-gray-900">
                {person.name}
              </h3>

              <p className=" text-medium text-gray-700">{person.para}</p>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border 
                border-transparent bg-red-800 px-4 py-2 text-base font-medium
                 text-white shadow-sm hover:bg-red-700 focus:outline-none 
                 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-0
                  sm:w-auto sm:text-sm mt-12"
              >
                Register Now
              </button>

              <span className="absolute inset-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
