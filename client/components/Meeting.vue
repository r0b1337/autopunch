<template>
    <div id="meeting" v-fade-in v-parallax="'assets/images/engine-tools.jpg'">
        <span class="title">PRENEZ RENDEZ-VOUS </span>
        <span class="subtitle">Soit par téléphone ou par email via notre formulaire ci dessous.</span>
        <a class="number link" href="tel:0661360510">0661360510</a>

        <form>
            <div class="infos">
                <input v-model="name" type="text" placeholder="Nom / Prénom"/>
                <input v-model="email" type="text" placeholder="Email"/>
            </div>

            <textarea
                id="subject"
                v-model="message"
                rows="5"
                placeholder="De quelles prestations avez vous besoin ? Transmettez nous les détails sur le modèle de votre véhicule (modèle, kilométrage, immatriculation, VIN *) pour une réponse toujours plus rapide."
            />
            <input id="contitions" type="checkbox"/>
            <label for="contitions">
                En continuant, vous acceptez nos
                <span class="link" @click="showTOS()">Conditions d'utilisation</span> et
                <span class="link" @click="showPP()">Politique de confidentialité</span>
            </label>

            <Modal ref="TOS">
                Conditions générales d'utilisation :<br/><br/>
                Ce site web est exploité par Autopunch. Sur ce site, les termes "nous", "notre" et "nos" font référence à Autopunch. Autopunch propose ce site web, y compris toutes les informations, tous les outils et tous les services qui y sont disponibles pour vous, l’utilisateur, sous réserve de votre acceptation de l’ensemble des modalités, conditions, politiques et avis énoncés ici.
                En visitant ce site et/ou en achetant un de nos produits, vous vous engagez dans notre "Service" et acceptez d’être lié par les modalités suivantes ("Conditions Générales de Vente"), y compris les modalités, conditions et politiques additionnelles auxquelles il est fait référence ici et/ou accessibles par hyperlien. Ces Conditions Générales de Vente et d’Utilisation s’appliquent à tous les utilisateurs de ce site, incluant mais ne se limitant pas, aux utilisateurs qui naviguent sur le site, qui sont des vendeurs, des clients, des marchands, et/ou des contributeurs de contenu.
                Veuillez lire attentivement ces Conditions Générales de Vente et d’Utilisation avant d’accéder à ou d’utiliser notre site web. En accédant à ou en utilisant une quelconque partie de ce site, vous acceptez d’être lié par ces Conditions Générales de Vente et d’Utilisation. Si vous n’acceptez pas toutes les modalités et toutes les Conditions de cet accord, alors vous ne devez pas accéder au site web ni utiliser les services qui y sont proposés. Si ces Conditions Générales de Vente et d’Utilisation sont considérées comme une offre, l’acceptation se limite expressément à ces Conditions Générales de Vente et d’Utilisation.
                Toutes les nouvelles fonctionnalités et tous les nouveaux outils qui seront ajoutés ultérieurement à cette boutique seront également assujettis à ces Conditions Générales de Vente et d’Utilisation. Vous pouvez consulter la version la plus récente des Conditions Générales de Vente et d’Utilisation à tout moment sur cette page. Nous nous réservons le droit de mettre à jour, de changer ou de remplacer toute partie de ces Conditions Générales de Vente et d’Utilisation en publiant les mises à jour et/ou les modifications sur notre site web. Il vous incombe de consulter cette page régulièrement pour vérifier si des modifications ont été apportées. Votre utilisation continue du site web ou votre accès à celui-ci après la publication de toute modification constitue une acception de votre part de ces modifications.
                Notre boutique est hébergée sur Strinkingly.inc. Ils nous fournissent la plate-forme qui nous permet de vous vendre nos produits et services.

                <br/><br/>

                ARTICLE 1 – CONDITIONS D’UTILISATION DE NOTRE BOUTIQUE EN LIGNE<br/>
                En acceptant ces Conditions Générales de Vente et d’Utilisation, vous déclarez que vous avez atteint l’âge de la majorité dans votre pays, État ou province de résidence, et que vous nous avez donné votre consentement pour permettre à toute personne d’âge mineur à votre charge d’utiliser ce site web.
                L’utilisation de nos produits à toute fin illégale ou non autorisée est interdite, et vous ne devez pas non plus, dans le cadre de l’utilisation du Service, violer les lois de votre juridiction (incluant mais ne se limitant pas aux lois relatives aux droits d’auteur).
                Vous ne devez pas transmettre de vers, de virus ou tout autre code de nature destructive.
                Toute infraction ou violation des présentes Conditions Générales de Vente et d’Utilisation entraînera la résiliation immédiate de vos Services.

                <br/><br/>

                ARTICLE 2 – CONDITIONS GÉNÉRALES<br/>
                Nous nous réservons le droit de refuser à tout moment l’accès aux services à toute personne, et ce, pour quelque raison que ce soit.
                Vous comprenez que votre contenu (à l’exclusion de vos informations de carte de crédit) pourrait être transféré de manière non chiffrée, et cela sous-entend (a) des transmissions sur divers réseaux; et (b) des changements pour se conformer et s’adapter aux exigences techniques pour la connexion des réseaux ou appareils. Les informations de carte de crédit sont toujours chiffrées pendant la transmission sur les réseaux.
                Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie du Service ou utilisation du Service, ou un quelconque accès au Service ou contact sur le site web, par le biais duquel le Service est fourni, sans autorisation écrite expresse préalable de notre part.
                Les titres utilisés dans cet accord sont inclus pour votre commodité, et ne vont ni limiter ni affecter ces Conditions.

                <br/><br/>

                ARTICLE 3 – EXACTITUDE, EXHAUSTIVITÉ ET ACTUALITÉ DES INFORMATIONS<br/>
                Nous ne sommes pas responsables si les informations disponibles sur ce site ne sont pas exactes, complètes ou à jour. Le contenu de ce site est fourni à titre indicatif uniquement et ne devrait pas constituer votre seule source d’information pour prendre des décisions, sans consulter au préalable des sources d’information plus exactes, plus complètes et actualisées. Si vous décidez de vous fier au contenu présenté sur ce site, vous le faites à votre propre risque.
                Ce site pourrait contenir certaines informations antérieures. Ces informations antérieures, par nature, ne sont pas à jour et sont fournies à titre indicatif seulement. Nous nous réservons le droit de modifier le contenu de ce site à tout moment, mais nous n’avons aucune obligation de mettre à jour les informations sur notre site. Vous acceptez qu’il vous incombe de surveiller les modifications apportées à notre site.

                <br/><br/>

                ARTICLE 4 – MODIFICATIONS APPORTÉES AU SERVICE ET AUX PRIX<br/>
                Les prix de nos produits peuvent être modifiés sans préavis.
                Nous nous réservons le droit à tout moment de modifier ou d’interrompre le Service (ainsi que toute partie ou tout contenu du Service) sans préavis et en tout temps.
                Nous ne serons pas responsables envers vous ou toute autre tierce partie de toute modification de prix, suspension ou interruption du Service.

                <br/><br/>

                ARTICLE 5 – PRODUITS OU SERVICES<br/>
                Certains produits ou services peuvent être exclusivement disponibles en ligne sur notre site web. Ces produits ou services peuvent être disponibles en quantités limitées.
                Nous avons fait de notre mieux pour afficher aussi clairement que possible les couleurs et images des produits qui apparaissent sur notre boutique. Nous ne pouvons garantir que l’affichage des couleurs par l’écran de votre ordinateur sera précis.
                Nous nous réservons le droit, sans toutefois être obligés de le faire, de limiter les ventes de nos produits ou services à toute personne, et dans toute région géographique ou juridiction. Nous pourrions exercer ce droit au cas par cas. Nous nous réservons le droit de limiter les quantités de tout produit ou service que nous offrons. Toutes les descriptions de produits et tous les prix des produits peuvent être modifiés en tout temps sans avis préalable, à notre seule discrétion. Nous nous réservons le droit d’arrêter d’offrir un produit à tout moment. Toute offre de service ou de produit présentée sur ce site est nulle là où la loi l’interdit.
                Nous ne garantissons pas que la qualité de tous les produits, services, informations, ou toute autre marchandise que vous avez obtenue ou achetée répondra à vos attentes.

                <br/><br/>

                ARTICLE 6 – EXACTITUDE DE LA FACTURATION ET DES INFORMATIONS DE COMPTE<br/>
                Nous nous réservons le droit de refuser toute commande que vous passez auprès de nous. Nous pourrions, à notre seule discrétion, réduire ou annuler les quantités achetées par personne, par foyer ou par commande. Ces restrictions pourraient inclure des commandes passées par ou depuis le même compte client, la même carte de crédit, et/ou des commandes qui utilisent la même adresse de facturation et/ou d’expédition. Dans le cas où nous modifierions une commande ou si nous venions à l’annuler, nous pourrions tenter de vous avertir en vous contactant à l’e-mail et/ou à l’adresse de facturation/au numéro de téléphone fourni au moment où la commande a été passée. Nous nous réservons le droit de limiter ou d’interdire les commandes qui, à notre seul jugement, pourraient sembler provenir de marchands, de revendeurs ou de distributeurs.
                Vous acceptez de fournir des informations de commande et de compte à jour, complètes et exactes pour toutes les commandes passées sur notre boutique. Vous vous engagez à mettre à jour rapidement votre compte et vos autres informations, y compris votre adresse e-mail, vos numéros de cartes de crédit et dates d’expiration, pour que nous poussions compléter vos transactions et vous contacter si nécessaire.

                <br/><br/>

                ARTICLE 7 – OUTILS FACULTATIFS<br/>
                Nous pourrions vous fournir l’accès à des outils de tierces parties sur lesquels nous n’exerçons ni suivi, ni contrôle, ni influence.
                Vous reconnaissez et acceptez le fait que nous fournissons l’accès à de tels outils "tels quels" et "selon la disponibilité", sans aucune garantie, représentation ou condition d’aucune sorte et sans aucune approbation. Nous n’aurons aucune responsabilité légale résultant de ou liée à l’utilisation de ces outils facultatifs de tiers.
                Si vous utilisez les outils facultatifs offerts sur le site, vous le faites à votre propre risque et à votre propre discrétion, et vous devriez consulter les conditions auxquelles ces outils sont offerts par le ou les fournisseurs tiers concerné(s).
                Nous pourrions aussi, à l’avenir, offrir de nouveaux services et/ou de nouvelles fonctionnalités sur notre site (incluant de nouveaux outils et de nouvelles ressources). Ces nouvelles fonctionnalités et ces nouveaux services seront également assujettis à ces Conditions Générales de Vente et d’Utilisation.

                <br/><br/>

                ARTICLE 8 – LIENS DE TIERS<br/>
                Certains contenus, produits et services disponibles par le biais de notre Service pourraient inclure des éléments provenant de tierces parties.
                Les liens provenant de tierces parties sur ce site pourraient vous rediriger vers des sites web de tiers qui ne sont pas affiliés à nous. Nous ne sommes pas tenus d’examiner ou d’évaluer le contenu ou l’exactitude de ces sites, et nous ne garantissons pas et n’assumons aucune re…
            </Modal>
            <Modal ref="PP">
                ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS<br/><br/>
                Lorsque vous effectuez un achat sur notre boutique, dans le cadre de notre processus d’achat et de vente, nous recueillons les renseignements personnels que vous nous fournissez, tels que votre nom, votre adresse et votre adresse e-mail.
                Lorsque vous naviguez sur notre boutique, nous recevons également automatiquement l’adresse de protocole Internet (adresse IP) de votre ordinateur, qui nous permet d’obtenir plus de détails au sujet du navigateur et du système d’exploitation que vous utilisez.
                Avec votre permission, nous sommes susceptibles de vous envoyer des e-mails au sujet de notre boutique, de nouveaux produits et d’autres mises à jour.

                <br/><br/>

                ARTICLE 2 - CONSENTEMENT<br/><br/>
                Comment obtenez-vous mon consentement ?
                Lorsque vous nous fournissez vos renseignements personnels pour conclure une transaction, vérifier votre carte de crédit, passer une commande, planifier une livraison ou retourner un achat, nous présumons que vous consentez à ce que nous recueillions vos renseignements et à ce que nous les utilisions à cette fin uniquement.
                Si nous vous demandons de nous fournir vos renseignements personnels pour une autre raison, à des fins de marketing par exemple, nous vous demanderons directement votre consentement explicite, ou nous vous donnerons la possibilité de refuser.
                Comment puis-je retirer mon consentement ?
                Si après nous avoir donné votre consentement, vous changez d’avis et ne consentez plus à ce que nous puissions vous contacter, recueillir vos renseignements, vous pouvez nous en aviser en nous contactant à auto.punch63@gmail.com

                <br/><br/>

                ARTICLE 3 – DIVULGATION<br/><br/>
                Nous pouvons divulguer vos renseignements personnels si la loi nous oblige à le faire ou si vous violez nos Conditions Générales de Vente et d’Utilisation.

                <br/><br/>

                ARTICLE 4 – Strinkingly<br/><br/>
                Notre boutique est hébergée sur Strinkingly Inc. Ils nous fournissent la plateforme e-commerce en ligne qui nous permet de vous vendre nos services et produits.
                Vos données sont stockées dans le système de stockage de données et les bases de données de Strikingly, et dans l’application générale de Strikingly. Vos données sont conservées sur un serveur sécurisé protégé par un pare-feu.
                Paiement
                Si vous réalisez votre achat par le biais d’une passerelle de paiement direct, dans ce cas Strikingly stockera vos renseignements de carte de crédit. Ces renseignements sont chiffrés conformément à la norme de sécurité des données établie par l’industrie des cartes de paiement (norme PCI-DSS). Les renseignements relatifs à votre transaction d’achat sont conservés aussi longtemps que nécessaire pour finaliser votre commande. Une fois votre commande finalisée, les renseignements relatifs à la transaction d’achat sont supprimés.
                Toutes les passerelles de paiement direct respectent la norme PCI-DSS, gérée par le conseil des normes de sécurité PCI, qui résulte de l’effort conjoint d’entreprises telles que Visa, MasterCard, American Express et Discover.
                Les exigences de la norme PCI-DSS permettent d’assurer le traitement sécurisé des données de cartes de crédit par notre boutique et par ses prestataires de services.
                Pour plus d’informations, veuillez consulter les Conditions d’utilisation de Shopify.

                <br/><br/>

                ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS<br/><br/>
                De manière générale, les fournisseurs tiers que nous utilisons vont uniquement recueillir, utiliser et divulguer vos renseignements dans la mesure du nécessaire pour pouvoir réaliser les services qu’ils nous fournissent.
                Cependant, certains tiers fournisseurs de services, comme les passerelles de paiement et autres processeurs de transactions de paiement, possèdent leurs propres politiques de confidentialité quant aux renseignements que nous sommes tenus de leur fournir pour vos transactions d’achat.
                En ce qui concerne ces fournisseurs, nous vous recommandons de lire attentivement leurs politiques de confidentialité pour que vous puissiez comprendre la manière dont ils traiteront vos renseignements personnels.
                Il ne faut pas oublier que certains fournisseurs peuvent être situés ou avoir des installations situées dans une juridiction différente de la votre ou de la notre. Donc si vous décidez de poursuivre une transaction qui requiert les services d’un fournisseur tiers, vos renseignements pourraient alors être régis par les lois de la juridiction dans laquelle ce fournisseur se situe ou celles de la juridiction dans laquelle ses installations sont situées.
                À titre d’exemple, si vous êtes situé au Canada et que votre transaction est traitée par une passerelle de paiement située aux États-Unis, les renseignements vous appartenant qui ont été utilisés pour conclure la transaction pourraient être divulgués en vertu de la législation des États-Unis, y compris le Patriot Act.
                Une fois que vous quittez le site de notre boutique ou que vous êtes redirigé vers le site web ou l’application d’un tiers, vous n’êtes plus régi par la présente Politique de Confidentialité ni par les Conditions Générales de Vente et d’Utilisation de notre site web.
                Liens
                Vous pourriez être amené à quitter notre site web en cliquant sur certains liens présents sur notre site. Nous n’assumons aucune responsabilité quant aux pratiques de confidentialité exercées par ces autres sites et vous recommandons de lire attentivement leurs politiques de confidentialité.

                <br/><br/>

                ARTICLE 6 – SÉCURITÉ<br/><br/>
                Pour protéger vos données personnelles, nous prenons des précautions raisonnables et suivons les meilleures pratiques de l’industrie pour nous assurer qu’elles ne soient pas perdues, détournées, consultées, divulguées, modifiées ou détruites de manière inappropriée.
                Si vous nous fournissez vos informations de carte de crédit, elles seront chiffrées par le biais de l’utilisation du protocole de sécurisation SSL et conservées avec un chiffrement de type AES-256. Bien qu’aucune méthode de transmission sur Internet ou de stockage électronique ne soit sûre à 100 %, nous suivons toutes les exigences de la norme PCI-DSS et mettons en œuvre des normes supplémentaires généralement reconnues par l’industrie.
                FICHIERS TÉMOINS (COOKIES)
                Voici une liste de fichiers témoins que nous utilisons. Nous les avons énumérés ici pour que vous ayez la possibilité de choisir si vous souhaitez les autoriser ou non.
                _session_id, identificateur unique de session, permet à Shopify de stocker les informations relatives à votre session (référent, page de renvoi, etc.).
                _shopify_visit, aucune donnée retenue, persiste pendant 30 minutes depuis la dernière visite. Utilisé par le système interne de suivi des statistiques du fournisseur de notre site web pour enregistrer le nombre de visites.
                _shopify_uniq, aucune donnée retenue, expire à minuit (selon l’emplacement du visiteur) le jour suivant. Calcule le nombre de visites d’une boutique par client unique.
                cart, identificateur unique, persiste pendant 2 semaines, stocke l’information relative à votre panier d’achat.
                _secure_session_id, identificateur unique de session
                storefront_digest, identificateur unique, indéfini si la boutique possède un mot de passe, il est utilisé pour savoir si le visiteur actuel a accès.

                <br/><br/>

                ARTICLE 7 – ÂGE DE CONSENTEMENT<br/><br/>
                En utilisant ce site, vous déclarez que vous avez au moins l’âge de la majorité dans votre état ou province de résidence, et que vous nous avez donné votre consentement pour permettre à toute personne d’âge mineur à votre charge d’utiliser ce site web.

                <br/><br/>

                ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ<br/><br/>
                Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment, donc veuillez s’il vous plait la consulter fréquemment. Les changements et les clarifications prendront effet immédiatement après leur publication sur le site web. Si nous apportons des changements au contenu de cette politique, nous vous aviserons ici qu’elle a été mise à jour, pour que vous sachiez quels renseignements nous recueillons, la manière dont nous les utilisons, et dans quelles circonstances nous les divulguons, s’il y a lieu de le faire.
                Si notre boutique fait l’objet d’une acquisition par ou d’une fusion avec une autre entreprise, vos renseignements pourraient être transférés aux nouveaux propriétaires pour que nous puissions continuer à vous vendre des produits.
                QUESTIONS ET COORDONNÉES
                Si vous souhaitez: accéder à, corriger, modifier ou supprimer toute information personnelle que nous avons à votre sujet, déposer une plainte, ou si vous souhaitez simplement avoir plus d’informations, contactez nous directement  à auto.punch63@gmail.com
            </Modal>
        </form>

        <Button text="Envoyer" @click="sendMail()"/>
    </div>
</template>

<script>
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import FadeIn from '~/plugins/fade-in.client.js';
import Parallax from '~/plugins/parallax.client.js';
import Modal from '~/components/Modal';

export default {
    name: 'Meeting',
    directives: {
        FadeIn,
        Parallax,
    },
    components: {
        Modal,
    },
    data () {
        return {
            name: '',
            email: '',
            message: '',
        };
    },
    computed: {
        app () {
            let parent = this.$parent;
            while (parent && parent._name !== '<App>') parent = parent.$parent;
            return parent;
        },
    },
    methods: {
        showTOS () { this.$refs.TOS.show(); },
        showPP () { this.$refs.PP.show(); },
        async sendMail () {
            const promise = axios.post('http://localhost:3000/mail', {
                name: this.name,
                email: this.email,
                message: this.message,
            });
            const id = uuid();
            // inserting toastr into the DOM
            this.app.toastrs.push({ promise, text: 'Votre mail a ete envoye avec succes !', id });
            // waiting resolution
            await promise;
            // removing toastr from the DOM 1s after resolution
            setTimeout(() => {
                this.app.toastrs = this.app.toastrs.filter(toastr => toastr.id !== id);
            }, 1500);
        },
    },
};
</script>

<style scoped lang="scss">
    #meeting {
        background-color: var(--color-grey);
        color: var(--color-light);
        padding: var(--space-large) 0;

        .title {
            margin-bottom: var(--space-x-large);
        }

        .subtitle {
            margin-bottom: var(--space-large);
        }

        .number {
            display: block;
            font: var(--font-large);
            color: var(--color-light);
            text-decoration: underline;
            margin-bottom: var(--space-large);
        }

        form {
            padding: 0 var(--space-x-large);
            margin-bottom: var(--space-base);

            .infos {
                display: flex;
                flex-direction: row;
                width: 100%;
            }

            input, textarea {
                background-color: var(--color-light);
                margin: var(--space-base);
                padding: var(--space-small);
                border-radius: var(--border-radius-base);
                width: 100%;
                width: -webkit-fill-available;
                outline: none;
                resize: none;
            }

            label {
                font: var(--font-points);
            }
        }
    }
</style>
