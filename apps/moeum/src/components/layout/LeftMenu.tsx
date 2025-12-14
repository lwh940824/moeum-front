export default function LeftMenu({ setOpen }: { setOpen: (open: boolean) => void }) {
    return (
        <div>
            <button onClick={() => setOpen(!open)} className="text-2xl font-bold text-red-500">LEFT MENU</button>
        </div >
    )
}