import { FaGithub } from "react-icons/fa";

export function GithubGraph() {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  return (
    <div className="border border-[#1E2939] rounded-lg p-5 bg-[#0A0A0A]">
      <p className="text-xs text-[#737373] mb-3">Contributions in the last year</p>

      <div className="flex text-[10px] text-[#737373] ml-8 mb-1 gap-[22px]">
        {months.map(m => <span key={m}>{m}</span>)}
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col text-[10px] text-[#737373] justify-between h-[80px]">
          <span>Mon</span>
          <span>Wed</span>
          <span className="text-[#A855F7]">Fri</span>
        </div>

        <div className="flex gap-[2px] flex-1">
          {[...Array(52)].map((_, col) => (
            <div key={col} className="flex flex-col gap-[2px]">
              {[...Array(7)].map((_, row) => {
                const isGreen = Math.random() > 0.7; // Mock para visualização
                return (
                  <div
                    key={row}
                    className={`w-[10px] h-[10px] rounded-[2px] ${isGreen ? 'bg-[#26A641]' : 'bg-[#161B22]'}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-[#737373] mt-3 ml-8">
        <span>2994 activities in 2026</span>
        <div className="flex items-center gap-1">
          Less
          <span className="w-[10px] h-[10px] rounded-[2px] bg-[#161B22]"></span>
          <span className="w-[10px] h-[10px] rounded-[2px] bg-[#0E4429]"></span>
          <span className="w-[10px] h-[10px] rounded-[2px] bg-[#006D32]"></span>
          <span className="w-[10px] h-[10px] rounded-[2px] bg-[#26A641]"></span>
          <span className="w-[10px] h-[10px] rounded-[2px] bg-[#39D353]"></span>
          More
        </div>
      </div>
    </div>
  );
}