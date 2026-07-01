'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';

interface HostVenueModalProps {
	open: boolean;
	onClose: () => void;
}

const INPUT_CLASS =
	'w-full rounded-lg border border-cursor-border bg-cursor-bg-dark px-3 py-2 text-sm text-cursor-text placeholder:text-cursor-text-faint transition-colors focus:border-cursor-border-emphasis focus:outline-none';

const EMPTY_FORM = {
	name: '',
	email: '',
	venueName: '',
	venueLocation: '',
	venueLink: '',
	message: '',
};

const HostVenueModal: React.FC<HostVenueModalProps> = ({ open, onClose }) => {
	const { t } = useI18n();
	const [form, setForm] = useState(EMPTY_FORM);

	useEffect(() => {
		if (!open) {
			return;
		}

		const handleKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKey);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKey);
			document.body.style.overflow = '';
		};
	}, [open, onClose]);

	const update =
		(field: keyof typeof EMPTY_FORM) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
			setForm((prev) => ({ ...prev, [field]: event.target.value }));

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const subject = `Venue suggestion: ${form.venueName}`;
		const body = [
			`Name: ${form.name}`,
			`Email: ${form.email}`,
			'',
			`Venue name: ${form.venueName}`,
			`Location: ${form.venueLocation}`,
			`Website / gallery: ${form.venueLink}`,
			'',
			'Notes:',
			form.message || '(none)',
		].join('\n');

		window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;

		setForm(EMPTY_FORM);
		onClose();
	};

	return (
		<AnimatePresence>
			{open ? (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
					onClick={onClose}
				>
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-labelledby="host-venue-modal-title"
						initial={{ opacity: 0, y: 16, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 16, scale: 0.98 }}
						transition={{ duration: 0.25 }}
						className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/[0.08] bg-cursor-surface p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:p-8"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={onClose}
							className="absolute right-4 top-4 rounded-lg border border-cursor-border bg-cursor-bg/60 p-2 text-cursor-text-muted transition-colors hover:text-cursor-text"
							aria-label={t('hostModal.close')}
						>
							<X className="h-4 w-4" />
						</button>

						<h2 id="host-venue-modal-title" className="pr-10 text-2xl font-bold text-cursor-text">
							{t('hostModal.title')}
						</h2>
						<p className="mt-2 text-sm leading-relaxed text-cursor-text-secondary">
							{t('hostModal.intro')}
						</p>

						<form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
							<div className="grid gap-4 md:grid-cols-2">
								<label className="flex flex-col gap-1.5 text-sm font-medium text-cursor-text">
									{t('hostModal.nameLabel')}
									<input
										type="text"
										required
										value={form.name}
										onChange={update('name')}
										placeholder={t('hostModal.namePlaceholder')}
										className={INPUT_CLASS}
									/>
								</label>
								<label className="flex flex-col gap-1.5 text-sm font-medium text-cursor-text">
									{t('hostModal.emailLabel')}
									<input
										type="email"
										required
										value={form.email}
										onChange={update('email')}
										placeholder={t('hostModal.emailPlaceholder')}
										className={INPUT_CLASS}
									/>
								</label>
							</div>

							<label className="flex flex-col gap-1.5 text-sm font-medium text-cursor-text">
								{t('hostModal.venueNameLabel')}
								<input
									type="text"
									required
									value={form.venueName}
									onChange={update('venueName')}
									placeholder={t('hostModal.venueNamePlaceholder')}
									className={INPUT_CLASS}
								/>
							</label>

							<label className="flex flex-col gap-1.5 text-sm font-medium text-cursor-text">
								{t('hostModal.venueLocationLabel')}
								<input
									type="text"
									required
									value={form.venueLocation}
									onChange={update('venueLocation')}
									placeholder={t('hostModal.venueLocationPlaceholder')}
									className={INPUT_CLASS}
								/>
							</label>

							<label className="flex flex-col gap-1.5 text-sm font-medium text-cursor-text">
								{t('hostModal.venueLinkLabel')}
								<input
									type="url"
									required
									value={form.venueLink}
									onChange={update('venueLink')}
									placeholder={t('hostModal.venueLinkPlaceholder')}
									className={INPUT_CLASS}
								/>
							</label>

							<label className="flex flex-col gap-1.5 text-sm font-medium text-cursor-text">
								{t('hostModal.messageLabel')}
								<textarea
									rows={3}
									value={form.message}
									onChange={update('message')}
									placeholder={t('hostModal.messagePlaceholder')}
									className={`${INPUT_CLASS} resize-none`}
								/>
							</label>

							<div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
								<button
									type="button"
									onClick={onClose}
									className="inline-flex items-center justify-center rounded-md border border-cursor-border px-4 py-2.5 text-sm font-medium text-cursor-text-secondary transition-colors hover:border-cursor-border-emphasis hover:text-cursor-text"
								>
									{t('hostModal.cancel')}
								</button>
								<button
									type="submit"
									className="inline-flex items-center justify-center rounded-md bg-cursor-text px-5 py-2.5 text-sm font-medium text-cursor-bg transition-opacity hover:opacity-90"
								>
									{t('hostModal.submit')}
								</button>
							</div>

							<p className="text-xs leading-relaxed text-cursor-text-muted">{t('hostModal.note')}</p>
						</form>
					</motion.div>
				</div>
			) : null}
		</AnimatePresence>
	);
};

export default HostVenueModal;
