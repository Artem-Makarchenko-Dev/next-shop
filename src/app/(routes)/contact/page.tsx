import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const revalidate = false;

export default async function ContactPage() {
  const t = await getTranslations("contacts");

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-foreground-900 mb-10">{t("title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-background rounded-2xl shadow-sm p-10 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground-900">{t("getInTouch")}</h2>
          <ul className="space-y-4 text-foreground-700 text-lg ">
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> {t("info.address")}
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" /> {t("info.phone")}
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" /> {t("info.email")}
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-2" /> {t("info.hours")}
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-xl shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.512302328818!2d30.516617476968616!3d50.4500338715949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5d8ec38e2b%3A0x3b7a4e5d2ab0e2f!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1692111111111!5m2!1sen!2sua"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form className="bg-background rounded-2xl shadow-sm p-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground-700 mb-1">
              {t("fields.name")}
            </label>
            <input
              type="text"
              placeholder={t("placeholders.name")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground-700 mb-1">
              {t("fields.email")}
            </label>
            <input
              type="email"
              placeholder={t("placeholders.email")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground-700 mb-1">
              {t("fields.message")}
            </label>
            <textarea
              rows={5}
              placeholder={t("placeholders.message")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:shadow-lg hover:bg-black transition cursor-pointer"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </section>
  );
}
