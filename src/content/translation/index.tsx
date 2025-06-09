interface Props {
  text: string;
  icon: string;
  coordinates: string;
}

export const Translations: Record<string, Props> = {
  Japanese: {
    text: "音声は、最も活用されていないデータの源です。",
    icon: "japan.svg",
    coordinates: "top-12 right-3 lg:top-27 lg:right-22",
  },
  Hindi: {
    text: "ऑडियो डेटा का सबसे कम उपयोग किया जाने वाला स्रोत है।",
    icon: "india.svg",
    coordinates: "top-25 right-15 lg:top-40 lg:right-38",
  },
  Spanish: {
    text: "El audio es la fuente de datos más desaprovechada.",
    icon: "spain.svg",
    coordinates: "top-32 lg:top-52 left-[53%] transform -translate-x-1/2",
  },
  French: {
    text: "L’audio est la source de données la plus sous-exploitée.",
    icon: "france.svg",
    coordinates: "top-28 lg:top-46 left-[56%] transform -translate-x-1/2",
  },
  Mandarin: {
    text: "音频是最未被充分利用的数据来源。",
    icon: "china.svg",
    coordinates: "top-12 right-7 lg:top-27 lg:right-27",
  },
  German: {
    text: "Audio ist die am wenigsten genutzte Datenquelle.",
    icon: "germany.svg",
    coordinates: "top-30 lg:top-43 left-1/2 transform -translate-x-1/2",
  },
  Portuguese: {
    text: "O áudio é a fonte de dados mais subutilizada.",
    icon: "portugal.svg",
    coordinates: "top-32 lg:top-52 left-[48%] transform -translate-x-1/2",
  },
  Korean: {
    text: "오디오는 가장 활용되지 않는 데이터 소스입니다.",
    icon: "korea.svg",
    coordinates: "top-19 right-5 lg:top-27 lg:right-25",
  },
};
