export default function DownloadCVButton() {
    return (
      <div className="flex justify-center mb-12">
        <a
          href="/cv-leandro.pdf" // Deixa o CV na pasta /public
          download
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Baixar Currículo
        </a>
      </div>
    );
}
