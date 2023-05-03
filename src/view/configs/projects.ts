import { ProjectsEnum } from '@/domain';

export const projects: Record<
  ProjectsEnum,
  {
    logo: string;
    name: string;
  }
> = {
  [ProjectsEnum.QantoApuestas]: {
    name: 'Qanto Apuestas',
    logo: 'https://storageaccountatom.blob.core.windows.net/mfe/quanto-apuestas.svg'
  },
  [ProjectsEnum.Bangits]: {
    name: 'Bangits',
    logo: 'https://storageaccountatom.blob.core.windows.net/mfe/bangits.svg'
  },
  [ProjectsEnum.Kingbet]: {
    name: 'King Bet',
    logo: 'https://storageaccountatom.blob.core.windows.net/storage/Iconimages/icon/0e69645c-9957-4f06-9e0f-83ba95e67dca_KINGBET.svg'
  },
  [ProjectsEnum.BlackSoftTech]: { name: 'BlackSoftTech', logo: '' },
  [ProjectsEnum.BetRabbit]: {
    name: 'Bet Rabbit',
    logo: 'https://storageaccountatom.blob.core.windows.net/storage/BetRabbit-Logo/22ea8c22-1141-4f8b-80c6-d30790197f6b_Group%204722.svg'
  },
  [ProjectsEnum.Mi7]: { name: 'Mi7bet', logo: 'https://storageaccountatom.blob.core.windows.net/mfe/Mi7bet.svg' },
  [ProjectsEnum.Revolucion]: {
    name: 'Revolucion',
    logo: 'https://storageaccountatom.blob.core.windows.net/staging-storage/projects/10892c41-2dc8-459a-b5f3-4f56e49a78ee_Group%2048099446.png'
  },
  [ProjectsEnum.FortunaCash]: {
    name: 'Revolucion',
    logo: 'https://storageaccountatom.blob.core.windows.net/staging-storage/projects/10892c41-2dc8-459a-b5f3-4f56e49a78ee_Group%2048099446.png'
  },
  [ProjectsEnum.PingWin]: { name: 'PingWin', logo: 'https://storageaccountatom.blob.core.windows.net/mfe/bingwin.svg' },
  [ProjectsEnum.BetCesar]: {
    name: 'Bet Cesar',
    logo: 'https://storageaccountatom.blob.core.windows.net/staging-storage/projects/14d7406e-534c-4f55-9507-386d4d62b513_Vector.png'
  }
};
