interface Props {
  text: string;
  icon: string;
  coordinates: string;
}

export const Translations: Record<string, Props> = {
  Japanese: {
    text: "音声は最も活用されていないデータソースです。",
    icon: "japan.svg",
    coordinates: "top-23 right-8 lg:top-27 lg:right-22",
  },
  Hindi: {
    text: "ऑडियो डेटा का सबसे कम उपयोग किया जाने वाला स्रोत है।",
    icon: "india.svg",
    coordinates: "top-36 right-24 lg:top-40 lg:right-38",
  },
  Spanish: {
    text: "El audio es la fuente de datos menos utilizada.",
    icon: "spain.svg",
    coordinates: "top-52 left-1/2 transform -translate-x-1/2",
  },
  French: {
    text: "L’audio est la source de données la moins utilisée.",
    icon: "france.svg",
    coordinates: "top-46 left-1/2 transform -translate-x-1/2",
  },
  Mandarin: {
    text: "欢迎来到 欢迎来到",
    icon: "china.svg",
    coordinates: "top-24 right-15 lg:top-27 lg:right-27",
  },
  German: {
    text: "Audio ist die am wenigsten genutzte Datenquelle.",
    icon: "germany.svg",
    coordinates: "top-43 left-1/2 transform -translate-x-1/2",
  },
  Portuguese: {
    text: "O áudio é a fonte de dados mais subutilizada.",
    icon: "portugal.svg",
    coordinates: "top-52 left-[48%] transform -translate-x-1/2",
  },
  Korean: {
    text: "오디오는 가장 활용도가 낮은 데이터 소스입니다.",
    icon: "korea.svg",
    coordinates: "top-23 right-13 lg:top-27 lg:right-25",
  },
};
