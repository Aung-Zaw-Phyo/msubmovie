import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home({ params: { lang } }) {
  const t = useTranslations('navigation');
  return (
    <div>Home - Language: {lang} {t("home")}</div>
  );
}
