import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translations = language === 'ja' ? jaTranslations : enTranslations;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// English translations
const enTranslations: Record<string, string> = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.products': 'Products',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  
  // Icon Horado
  'products.horado.title': 'Icon Horado',
  'products.horado.desc': 'Work-Rest Hours',
  'horado.description': 'Monitoring of Work-Rest Hours onboard the ship is vital as it has a direct impact on the safety of the ship, cargo, and crew. To prevent the high instance of fatigue and the possibility of accidents at sea, the International Maritime Association in conjunction with International Labor Organization has laid out a set of strict regulations for crew work and rest hours when on duty. Our product helps you to comply with these regulations.',
  'horado.details': 'Ship Work & Rest Hours Tracking System is a cost-effective tool for registering executed work and rest hours. It calculates rest hours and automatically checks compliance with international and national legislation.',

  // Icon Argus
  'products.argus.title': 'Icon Argus',
  'products.argus.desc': 'Surveys & Inspections',
  'argus.description': 'A specialized mobile application assisting the user to collect and collate data as per different surveying/ inspection requirements, on-board the ship. The Application can be configured for a range of activities such as vessel manager inspections, draft survey, IHM survey, SIRE, Right Ship, etc., based on the checklists for each type of inspection.',

  // Icon Maris
  'products.maris.title': 'Icon Maris',
  'products.maris.desc': 'Ship Guard',
  'maris.description': 'Cold laid-up ships are manned round the clock by trained watchmen; the ships are boarded regularly by maintenance teams who check conditions on board and perform minor maintenance as necessary. Watchmen then communicate by Radio to the base and report the status.',

  // Icon Doris
  'products.doris.title': 'Icon Doris',
  'products.doris.desc': 'Ship Spares Logistics',
  'doris.description': 'Ship Spares Logistics is an essential service ensuring ordered spares are onboard the ship on time, which always keeps your Ship moving. We offer a solution which enables Agents, Forwarders, Ship Owners and Management companies to manage the spares logistics "door-to-deck" globally.',
  
  // Services
  'services.tech.title': 'Technology & AI',
  'services.tech.desc': 'Smart solutions for maritime',
  'services.chartering.title': 'Chartering Consultancy',
  'services.chartering.desc': 'Expert maritime guidance',
  'services.marketing.title': 'Marketing',
  'services.marketing.desc': 'Strategic maritime marketing',
  
  'footer.company': 'Company',
  'footer.newsletter': 'Newsletter',
  'footer.newsletter.desc': 'Subscribe to our newsletter and stay updated with the latest maritime technology trends.',
  'footer.newsletter.placeholder': 'Email address',
  'footer.newsletter.success': 'Thank you for subscribing!',
  'footer.newsletter.consent': 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
  'footer.copyright': '© {year} Icon Maritech Technology & Consulting LLC. All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.cookies': 'Cookie Policy',
  'product.features': 'Features',
  'product.benefits': 'Benefits',
  'product.details': 'Product Details',

};

// Japanese translations
const jaTranslations: Record<string, string> = {
  'nav.home': 'ホーム',
  'nav.about': '会社概要',
  'nav.products': '製品',
  'nav.services': 'サービス',
  'nav.contact': 'お問い合わせ',
  
  'products.horado.title': 'アイコン ホラド',
  'products.horado.desc': '労働時間管理',
  'products.argus.title': 'アイコン アルゴス',
  'products.argus.desc': '検査・点検',
  'products.maris.title': 'アイコン マリス',
  'products.maris.desc': '船舶警備',
  'products.doris.title': 'アイコン ドリス',
  'products.doris.desc': '船舶部品物流',
  
  'services.tech.title': 'テクノロジー＆AI',
  'services.tech.desc': '海事向けスマートソリューション',
  'services.chartering.title': '用船コンサルティング',
  'services.chartering.desc': '専門的な海事ガイダンス',
  'services.marketing.title': 'マーケティング',
  'services.marketing.desc': '戦略的な海事マーケティング',
  
  'footer.company': '会社情報',
  'footer.newsletter': 'ニュースレター',
  'footer.newsletter.desc': '最新の海事技術トレンドをお届けします。',
  'footer.newsletter.placeholder': 'メールアドレス',
  'footer.newsletter.success': 'ご登録ありがとうございます！',
  'footer.newsletter.consent': '登録することで、プライバシーポリシーに同意し、当社からの更新情報の受信に同意したものとみなされます。',
  'footer.copyright': '© {year} アイコンマリテック テクノロジー＆コンサルティング LLC. All rights reserved.',
  'footer.privacy': 'プライバシーポリシー',
  'footer.terms': '利用規約',
  'footer.cookies': 'Cookie ポリシー',

  // Product Pages - Common
  'product.features': '主な機能',
  'product.benefits': 'メリット',
  'product.details': '製品詳細',

  // Icon Horado
  'horado.subtitle': '労働時間管理',
  'horado.description': '船舶での労働時間管理は、船舶、貨物、乗組員の安全に直接影響を与えるため、非常に重要です。疲労による事故を防ぐため、国際海事機関と国際労働機関は、乗組員の労働時間と休息時間に関する厳格な規制を定めています。当社の製品は、これらの規制への準拠をサポートします。',
  'horado.details': '船舶労働時間管理システムは、実施された作業時間と休息時間を記録する費用対効果の高いツールです。休息時間を計算し、国際法および国内法への準拠を自動的にチェックします。',

  // Icon Argus
  'argus.subtitle': '検査・点検',
  'argus.description': '船舶での各種検査・点検要件に応じてデータを収集・整理するための専用モバイルアプリケーションです。船舶管理者による検査、喫水検査、IHM検査、SIRE、Right Ship等、各種検査のチェックリストに基づいて設定可能です。',

  // Icon Maris
  'maris.subtitle': '船舶警備',
  'maris.description': '休船中の船舶は、訓練を受けた警備員が24時間体制で監視しています。メンテナンスチームが定期的に船舶に乗り込み、船内の状態を確認し、必要に応じて軽微なメンテナンスを実施します。警備員は無線で基地局と連絡を取り、状況を報告します。',

  // Icon Doris
  'doris.subtitle': '船舶部品物流',
  'doris.description': '船舶部品物流は、注文された部品を確実に船舶に届け、船舶の運航を維持するための重要なサービスです。当社のソリューションは、代理店、フォワーダー、船主、管理会社が世界規模で部品物流を「ドア・トゥ・デッキ」で管理することを可能にします。'
};