import { estimatedSoundDummyData, soundPowerLevelDummyData } from "@/app/[lang]/constants/const";

interface estimatedSoundProps {
  content1: string;
  content2: string;
}

export default function EstimatedSoundPowerDataTable() {
  const renderTdItem = (productType: keyof estimatedSoundProps) => {
    return estimatedSoundDummyData.map((item: estimatedSoundProps, index: number) => {
      return (
        // 반응형
        <td
          key={"estimatedSoundDummyData-" + index}
          className={`tableTd w-[7.813rem] !h-[1.875rem] ${item.content1 ? "!font-LGSMHATSB" : ""}`}
        >
          {productType === "content1" ? item.content1 : item.content2}
        </td>
      );
    });
  };
  return (
    <>
      {/* 반응형 */}
      <table className={"mobile:hidden"}>
        <caption className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3"}>
          Unit : dB
        </caption>
        <thead>
          <tr>
            <th colSpan={9} className={"tableTh"}>
              <span className={"font-LGSMHATSB text-[0.75rem] leading-[1.125rem]"}>
                Data(Octaved band)
              </span>
              _Sound Power Level
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={"tableTd w-[12.5rem] bg-gray_100"} rowSpan={2}>
              Octave Band
            </td>
            {renderTdItem("content1")}
          </tr>
          <tr>{renderTdItem("content2")}</tr>
          <tr>
            <td className={"tableTd bg-gray_100 !h-[1.875rem]"}>Overall</td>
            <td className={"tableTd !h-[1.875rem]"}></td>
          </tr>
        </tbody>
      </table>
      {/* 반응형 */}
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[1.875rem]"}>
        <div
          className={
            "h-[2.5rem] bg-gray_100 flex items-center justify-between w-[calc(100%+2rem)] mx-[-1rem] px-[1rem]"
          }
        >
          <p className={"font-LGSMHATB text-gray_700 text-[0.875rem]"}>
            Data(Octaved band)
            <span className={"font-LGSMHATSB text-[0.875rem]"}>_Sound Power Level</span>
          </p>
          <p className={"text-[0.625rem] text-gray_700"}>Unit : dB</p>
        </div>
        <div className={"flex flex-col gap-[0.75rem]"}>
          <div
            className={`text-[0.875rem] leading-[1.125rem] font-LGSMHATB text-gray_700 text-left`}
          >
            Octave Band
          </div>
          <div className={"flex flex-col gap-[1.5rem]"}>
            <table className={"table-fixed"}>
              <tbody>
                {estimatedSoundDummyData.map((item, index: number) => {
                  if (index % 2 !== 0) {
                    return null;
                  }
                  return (
                    <tr key={index}>
                      <th className={`tableTh`}>{item.content1}</th>
                      <td className={`tableTd`}>{item.content2}</td>
                      {index + 1 < estimatedSoundDummyData.length && (
                        <>
                          <th className={`tableTh`}>
                            {estimatedSoundDummyData[index + 1]?.content1}
                          </th>
                          <td className={`tableTd`}>
                            {estimatedSoundDummyData[index + 1]?.content2}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <table className={"table-fixed "}>
              <tbody>
                <tr>
                  <th className={"tableTh !font-LGSMHATR !text-[#000]"}>Overall (dB(A))</th>
                  <td className={"tableTd"}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}