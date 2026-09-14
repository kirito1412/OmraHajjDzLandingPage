import { whatsappLink } from '../data'

/** زر الحجز الكبير: أخضر، عريض، في الوسط، مع اهتزاز مستمر */
export default function WhatsappButton({ context }: { context?: string }) {
  return (
    <div className="flex justify-center">
      <a
        href={whatsappLink(context)}
        target="_blank"
        rel="noreferrer"
        className="animate-shake flex w-full max-w-2xl items-center justify-center gap-4 rounded-2xl bg-brand px-8 py-6 text-2xl font-extrabold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 sm:py-7 sm:text-3xl"
      >
        <svg viewBox="0 0 32 32" className="size-9 shrink-0 fill-current sm:size-10" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378l-1.994 5.944 6.15-1.966A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.414 1.636-3.894.386-.394.102-.628.906-.628.26 0 .492.014.7.024.502.022.754.052 1.086.844.412.994 1.416 3.29 1.536 3.538.122.248.244.584.076.894-.158.32-.298.47-.546.756-.248.286-.484.504-.732.812-.226.268-.482.556-.196 1.05.286.484 1.272 2.094 2.724 3.386 1.872 1.666 3.39 2.198 3.936 2.426.406.168.89.128 1.188-.188.378-.406.844-1.08 1.318-1.744.338-.476.764-.536 1.212-.368.456.158 2.742 1.292 3.238 1.538.496.248.824.366.944.574.118.208.118 1.188-.268 2.278l-.004.004Z" />
        </svg>
        احجز الآن
      </a>
    </div>
  )
}
