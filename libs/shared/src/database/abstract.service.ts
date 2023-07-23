export type ModelToDtoFn<Model, DTO> = (model: Model) => DTO;
export type DtoToModelFn<Model, DTO> = (dto: DTO) => Omit<Model, '_id'>;
export type GetFn<DTO> = () => Promise<DTO[]>;
export type GetByIdFn<DTO> = (id: string) => Promise<DTO>;
export type CreateFn<DTO> = (dto: DTO) => Promise<DTO>;
export type UpdateFn<DTO> = (id: string, dto: DTO) => Promise<DTO>;
export type DeleteFn = (id: string) => Promise<void>;

export abstract class AbstractService<Model, DTO> {
  abstract modelToDto: ModelToDtoFn<Model, DTO>;
  abstract dtoToModel: DtoToModelFn<Model, DTO>;

  abstract get: GetFn<DTO>;
  abstract getById: GetByIdFn<DTO>;

  abstract create: CreateFn<DTO>;
  abstract update: UpdateFn<DTO>;
  abstract delete: DeleteFn;
}
